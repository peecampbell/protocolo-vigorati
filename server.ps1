$root = Split-Path -Parent $MyInvocation.MyCommand.Path
$port = 8080
$mime = @{
  '.html' = 'text/html; charset=utf-8'
  '.css'  = 'text/css; charset=utf-8'
  '.js'   = 'application/javascript; charset=utf-8'
  '.png'  = 'image/png'
  '.jpg'  = 'image/jpeg'
  '.svg'  = 'image/svg+xml'
  '.json' = 'application/json'
  '.ico'  = 'image/x-icon'
}

while ($true) {
  $listener = $null
  try {
    $listener = [System.Net.HttpListener]::new()
    $listener.Prefixes.Add("http://localhost:$port/")
    $listener.Start()

    while ($listener.IsListening) {
      try {
        $ctx = $listener.GetContext()
        $req = $ctx.Request
        $res = $ctx.Response

        $urlPath = $req.Url.LocalPath
        if ($urlPath -eq '/' -or $urlPath -eq '') { $urlPath = '/index.html' }
        if ($urlPath -eq '/oferta')               { $urlPath = '/oferta.html' }

        $rel  = $urlPath.TrimStart('/').Replace('/', [IO.Path]::DirectorySeparatorChar)
        $file = Join-Path $root $rel

        if (Test-Path $file -PathType Leaf) {
          $ext = [IO.Path]::GetExtension($file).ToLower()
          $res.ContentType    = if ($mime[$ext]) { $mime[$ext] } else { 'application/octet-stream' }
          $res.StatusCode     = 200
          $bytes = [IO.File]::ReadAllBytes($file)
          $res.ContentLength64 = $bytes.Length
          $res.OutputStream.Write($bytes, 0, $bytes.Length)
        } else {
          $res.StatusCode = 404
          $body = [Text.Encoding]::UTF8.GetBytes("404 Not Found: $urlPath")
          $res.ContentType     = 'text/plain; charset=utf-8'
          $res.ContentLength64 = $body.Length
          $res.OutputStream.Write($body, 0, $body.Length)
        }
      } catch { }
      finally {
        try { $ctx.Response.OutputStream.Close() } catch { }
      }
    }
  } catch {
    Start-Sleep -Seconds 1
  } finally {
    if ($null -ne $listener) { try { $listener.Stop(); $listener.Close() } catch { } }
  }
}
