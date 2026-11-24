// Worker de Cloudflare: control de acceso del tour Altos de Buena Vista.
// Variables necesarias (Settings > Variables): ADMIN_PASSWORD, NTFY_TOPIC. Enlace KV: ACCESS.
// Opcional: ALLOWED_ORIGIN (por ejemplo https://nbarillas28.github.io).
const TOUR = {"lots":[{"n":1,"t":"A","w":8.0,"d":17.0,"a":136.0,"c":96.0,"p":[[268,136.8],[305,136.8],[305,155.6],[268,155.6]]},{"n":2,"t":"A","w":8.0,"d":17.0,"a":136.0,"c":92.0,"p":[[268,155.6],[305,155.6],[305,173.7],[268,173.7]]},{"n":3,"t":"A","w":8.0,"d":17.0,"a":136.0,"c":90.0,"p":[[268,173.7],[305,173.7],[305,191.4],[268,191.4]]},{"n":4,"t":"A","w":8.0,"d":17.0,"a":136.0,"c":88.0,"p":[[268,191.4],[305,191.4],[305,209.6],[268,209.6]]},{"n":5,"t":"A","w":8.0,"d":17.0,"a":136.0,"c":86.0,"p":[[268,209.6],[305,209.6],[305,228.3],[268,228.3]]},{"n":6,"t":"A","w":8.0,"d":17.0,"a":136.0,"c":84.0,"p":[[268,228.3],[305,228.3],[305,246.7],[268,246.7]]},{"n":7,"t":"A","w":8.0,"d":17.0,"a":136.0,"c":82.0,"p":[[268,246.7],[305,246.7],[305,264.8],[268,264.8]]},{"n":8,"t":"A","w":8.0,"d":17.0,"a":136.0,"c":80.0,"p":[[268,264.8],[305,264.8],[305,282.9],[268,282.9]]},{"n":9,"t":"A","w":8.0,"d":17.0,"a":136.0,"c":78.0,"p":[[268,282.9],[305,282.9],[305,301.7],[268,301.7]]},{"n":10,"t":"A","w":8.0,"d":17.0,"a":136.0,"c":74.0,"p":[[268,301.7],[305,301.7],[305,320.6],[268,320.6]]},{"n":11,"t":"A","w":8.0,"d":17.0,"a":136.0,"c":72.0,"p":[[268,320.6],[305,320.6],[305,338.7],[268,338.7]]},{"n":12,"t":"A","w":8.0,"d":17.0,"a":136.0,"c":70.0,"p":[[268,338.7],[305,338.7],[305,356.8],[268,356.8]]},{"n":13,"t":"A","w":8.0,"d":17.0,"a":136.0,"c":68.0,"p":[[268,356.8],[305,356.8],[305,375.0],[268,375.0]]},{"n":14,"t":"A","w":8.0,"d":17.0,"a":136.0,"c":66.0,"p":[[268,375.0],[305,375.0],[305,393.1],[268,393.1]]},{"n":15,"t":"A","w":8.0,"d":17.0,"a":136.0,"c":62.0,"p":[[268,393.1],[305,393.1],[305,411.2],[268,411.2]]},{"n":16,"t":"B'","w":8.0,"d":15.0,"a":120.0,"c":96.0,"p":[[215.9,138.1],[248.5,138.1],[248.5,157.0],[215.9,157.0]]},{"n":17,"t":"B'","w":8.0,"d":15.7,"a":125.6,"c":92.0,"p":[[214.3,157.0],[248.5,157.0],[248.5,175.5],[214.3,175.5]]},{"n":18,"t":"B'","w":8.0,"d":16.4,"a":131.2,"c":90.0,"p":[[212.8,175.5],[248.5,175.5],[248.5,193.6],[212.8,193.6]]},{"n":19,"t":"B'","w":8.0,"d":17.0,"a":136.0,"c":88.0,"p":[[211.5,193.6],[248.5,193.6],[248.5,211.5],[211.5,211.5]]},{"n":20,"t":"A","w":8.0,"d":17.0,"a":136.0,"c":84.0,"p":[[211.5,231.5],[248.5,231.5],[248.5,249.6],[211.5,249.6]]},{"n":21,"t":"A","w":8.0,"d":17.0,"a":136.0,"c":82.0,"p":[[211.5,249.6],[248.5,249.6],[248.5,268.0],[211.5,268.0]]},{"n":22,"t":"A","w":8.0,"d":17.0,"a":136.0,"c":80.0,"p":[[211.5,268.0],[248.5,268.0],[248.5,286.4],[211.5,286.4]]},{"n":23,"t":"A","w":8.0,"d":17.0,"a":136.0,"c":78.0,"p":[[211.5,286.4],[248.5,286.4],[248.5,304.5],[211.5,304.5]]},{"n":24,"t":"A","w":7.0,"d":16.0,"a":112.0,"c":72.0,"p":[[211.5,319.8],[248.5,319.8],[248.5,335.9],[211.5,335.9]]},{"n":25,"t":"A","w":7.0,"d":16.0,"a":112.0,"c":70.0,"p":[[211.5,335.9],[248.5,335.9],[248.5,351.9],[211.5,351.9]]},{"n":26,"t":"A","w":7.0,"d":16.0,"a":112.0,"c":68.0,"p":[[211.5,351.9],[248.5,351.9],[248.5,367.7],[211.5,367.7]]},{"n":27,"t":"A","w":7.0,"d":16.0,"a":112.0,"c":66.0,"p":[[211.5,367.7],[248.5,367.7],[248.5,383.5],[211.5,383.5]]},{"n":28,"t":"A","w":8.0,"d":17.0,"a":136.0,"c":84.0,"p":[[174.5,233.0],[211.5,233.0],[211.5,250.1],[174.5,250.1]]},{"n":29,"t":"A","w":8.0,"d":17.0,"a":136.0,"c":82.0,"p":[[174.5,250.1],[211.5,250.1],[211.5,268.2],[174.5,268.2]]},{"n":30,"t":"A","w":8.0,"d":17.0,"a":136.0,"c":80.0,"p":[[174.5,268.2],[211.5,268.2],[211.5,286.6],[174.5,286.6]]},{"n":31,"t":"A","w":8.0,"d":17.0,"a":136.0,"c":78.0,"p":[[174.5,286.6],[211.5,286.6],[211.5,304.4],[174.5,304.4]]},{"n":32,"t":"A","w":7.0,"d":16.0,"a":112.0,"c":72.0,"p":[[174.5,319.9],[211.5,319.9],[211.5,336.1],[174.5,336.1]]},{"n":33,"t":"A","w":7.0,"d":16.0,"a":112.0,"c":70.0,"p":[[174.5,336.1],[211.5,336.1],[211.5,352.2],[174.5,352.2]]},{"n":34,"t":"A","w":7.0,"d":16.0,"a":112.0,"c":68.0,"p":[[174.5,352.2],[211.5,352.2],[211.5,367.9],[174.5,367.9]]},{"n":35,"t":"A","w":7.0,"d":16.0,"a":112.0,"c":66.0,"p":[[174.5,367.9],[211.5,367.9],[211.5,383.4],[174.5,383.4]]},{"n":36,"t":"D","w":39.5,"d":10.5,"a":414.75,"c":60.0,"p":[[164.5,407.1],[259.5,407.1],[259.5,430.7],[164.5,430.7]]},{"n":37,"t":"C","w":41.0,"d":10.5,"a":430.5,"c":58.0,"p":[[164.5,430.7],[259.5,430.7],[259.5,454.5],[164.5,454.5]]},{"n":38,"t":"C","w":41.0,"d":10.5,"a":430.5,"c":56.0,"p":[[164.5,454.5],[259.5,454.5],[259.5,477.9],[164.5,477.9]]},{"n":39,"t":"C","w":41.0,"d":10.5,"a":430.5,"c":54.0,"p":[[164.5,477.9],[259.5,477.9],[259.5,500.9],[164.5,500.9]]},{"n":40,"t":"A","w":8.0,"d":17.0,"a":136.0,"c":48.0,"p":[[211.5,520.4],[248.5,520.4],[248.5,538.2],[211.5,538.2]]},{"n":41,"t":"A","w":8.0,"d":17.0,"a":136.0,"c":46.0,"p":[[211.5,538.2],[248.5,538.2],[248.5,556.2],[211.5,556.2]]},{"n":42,"t":"A","w":8.0,"d":17.0,"a":136.0,"c":44.0,"p":[[211.5,556.2],[248.5,556.2],[248.5,574.5],[211.5,574.5]]},{"n":43,"t":"A","w":8.0,"d":17.0,"a":136.0,"c":48.0,"p":[[174.5,520.7],[211.5,520.7],[211.5,538.3],[174.5,538.3]]},{"n":44,"t":"A","w":8.0,"d":17.0,"a":136.0,"c":46.0,"p":[[174.5,538.3],[211.5,538.3],[211.5,556.1],[174.5,556.1]]},{"n":45,"t":"A","w":8.0,"d":17.0,"a":136.0,"c":44.0,"p":[[174.5,556.1],[211.5,556.1],[211.5,574.3],[174.5,574.3]]},{"n":46,"t":"B'","w":8.0,"d":17.0,"a":136.0,"c":86.0,"p":[[127.0,211.9],[164.0,211.9],[164.0,229.7],[127.0,229.7]]},{"n":47,"t":"B'","w":8.0,"d":17.0,"a":136.0,"c":84.0,"p":[[127.0,229.7],[164.0,229.7],[164.0,247.8],[127.0,247.8]]},{"n":48,"t":"B'","w":8.0,"d":16.8,"a":134.4,"c":82.0,"p":[[127.4,247.8],[164.0,247.8],[164.0,266.2],[127.4,266.2]]},{"n":49,"t":"B'","w":8.0,"d":16.5,"a":132.0,"c":80.0,"p":[[128.1,266.2],[164.0,266.2],[164.0,284.3],[128.1,284.3]]},{"n":50,"t":"B'","w":8.0,"d":16.2,"a":129.6,"c":78.0,"p":[[128.7,284.3],[164.0,284.3],[164.0,302.5],[128.7,302.5]]},{"n":51,"t":"B'","w":8.0,"d":15.9,"a":127.2,"c":74.0,"p":[[129.4,302.5],[164.0,302.5],[164.0,320.6],[129.4,320.6]]},{"n":52,"t":"B'","w":8.0,"d":15.6,"a":124.8,"c":72.0,"p":[[130.0,320.6],[164.0,320.6],[164.0,338.8],[130.0,338.8]]},{"n":53,"t":"B'","w":8.0,"d":15.3,"a":122.4,"c":70.0,"p":[[130.7,338.8],[164.0,338.8],[164.0,356.9],[130.7,356.9]]},{"n":54,"t":"B'","w":8.0,"d":15.0,"a":120.0,"c":68.0,"p":[[131.4,356.9],[164.0,356.9],[164.0,375.0],[131.4,375.0]]},{"n":55,"t":"B'","w":8.0,"d":14.7,"a":117.6,"c":66.0,"p":[[132.0,375.0],[164.0,375.0],[164.0,393.1],[132.0,393.1]]},{"n":56,"t":"B'","w":8.0,"d":14.4,"a":115.2,"c":62.0,"p":[[132.7,393.1],[164.0,393.1],[164.0,411.1],[132.7,411.1]]}],"per":[[311.0,94.0],[311.0,465.1],[267.2,463.8],[263.0,777.4],[105.4,750.8],[96.1,182.0],[201.7,185.2],[211.9,82.6]],"prof":[[147.7,96.0],[166.1,92.0],[183.9,90.0],[202.9,88.0],[221.3,86.0],[241.1,84.0],[259.2,82.0],[277.2,80.0],[295.8,78.0],[311.4,74.0],[328.2,72.0],[343.9,70.0],[359.6,68.0],[375.6,66.0],[396.9,62.0],[418.0,60.0],[442.5,58.0],[465.6,56.0],[490.6,54.0],[511.1,50.0],[529.0,48.0],[548.2,46.0],[566.1,44.0],[581.4,40.0]]};

const J = (o, s = 200, h = {}) => new Response(JSON.stringify(o), { status: s, headers: { 'Content-Type': 'application/json', ...h } });
const rid = (n = 16) => [...crypto.getRandomValues(new Uint8Array(n))].map(b => b.toString(16).padStart(2, '0')).join('');
async function sig(env, text) {
  const k = await crypto.subtle.importKey('raw', new TextEncoder().encode(env.ADMIN_PASSWORD), { name: 'HMAC', hash: 'SHA-256' }, false, ['sign']);
  const s = await crypto.subtle.sign('HMAC', k, new TextEncoder().encode(text));
  return [...new Uint8Array(s)].map(b => b.toString(16).padStart(2, '0')).join('').slice(0, 32);
}
const ascii = s => String(s).normalize('NFD').replace(/[^\x20-\x7e]/g, '').slice(0, 60);
const clean = (s, n) => String(s || '').replace(/[<>]/g, '').trim().slice(0, n);

async function getReq(env, id) { const v = await env.ACCESS.get('req:' + id); return v ? JSON.parse(v) : null; }
async function putReq(env, r) { await env.ACCESS.put('req:' + r.id, JSON.stringify(r)); }

async function decide(env, id, action, hours) {
  const r = await getReq(env, id); if (!r) return null;
  if (action === 'approve') {
    if (r.token) await env.ACCESS.delete('tok:' + r.token);
    r.status = 'approved'; r.token = rid(24); r.decided = Date.now();
    r.expires = hours > 0 ? Date.now() + hours * 3600e3 : 0;
    await env.ACCESS.put('tok:' + r.token, r.id, hours > 0 ? { expirationTtl: Math.max(60, hours * 3600) } : undefined);
  } else {
    if (r.token) await env.ACCESS.delete('tok:' + r.token);
    r.status = action === 'revoke' ? 'revoked' : 'denied'; r.token = null; r.decided = Date.now();
  }
  await putReq(env, r); return r;
}
async function tokenOk(env, token) {
  if (!token) return false; const id = await env.ACCESS.get('tok:' + token); if (!id) return false;
  const r = await getReq(env, id); return !!r && r.status === 'approved' && (!r.expires || r.expires > Date.now());
}
const isAdmin = (req, env) => (req.headers.get('Authorization') || '') === 'Bearer ' + env.ADMIN_PASSWORD;

async function notify(env, origin, r) {
  if (!env.NTFY_TOPIC) return;
  const mk = async (act, h) => `${origin}/api/a/${r.id}?act=${act}&h=${h}&s=${await sig(env, r.id + act + h)}`;
  const actions = [`http, Aprobar 7d, ${await mk('approve', 168)}, method=GET, clear=true`, `http, Rechazar, ${await mk('deny', 0)}, method=GET, clear=true`].join('; ');
  try {
    await fetch('https://ntfy.sh/' + env.NTFY_TOPIC, {
      method: 'POST',
      headers: { Title: 'Solicitud de acceso - Altos de Buena Vista', Priority: 'high', Tags: 'key', Actions: actions },
      body: `${r.name}\nTel: ${r.phone}`
    });
  } catch (e) {}
}

export default {
  async fetch(req, env) {
    const url = new URL(req.url), p = url.pathname;
    const cors = { 'Access-Control-Allow-Origin': env.ALLOWED_ORIGIN || '*', 'Access-Control-Allow-Headers': 'Content-Type, Authorization', 'Access-Control-Allow-Methods': 'GET, POST, PUT, OPTIONS', 'Vary': 'Origin' };
    if (req.method === 'OPTIONS') return new Response(null, { status: 204, headers: cors });
    const out = (o, s = 200) => J(o, s, cors);
    try {
      // --- cliente: pedir acceso
      if (p === '/api/request' && req.method === 'POST') {
        const b = await req.json().catch(() => ({})), name = clean(b.name, 80), phone = clean(b.phone, 30);
        if (!name || !phone) return out({ error: 'datos' }, 400);
        const ip = req.headers.get('CF-Connecting-IP') || 'x', rk = 'rl:' + ip;
        const n = +(await env.ACCESS.get(rk) || 0); if (n >= 5) return out({ error: 'limite' }, 429);
        await env.ACCESS.put(rk, String(n + 1), { expirationTtl: 3600 });
        const r = { id: rid(8), secret: rid(16), name, phone, status: 'pending', created: Date.now(), token: null, expires: 0 };
        await putReq(env, r); await notify(env, url.origin, r);
        return out({ id: r.id, secret: r.secret });
      }
      // --- cliente: consultar estado
      if (p === '/api/status') {
        const r = await getReq(env, url.searchParams.get('id') || '');
        if (!r || r.secret !== url.searchParams.get('secret')) return out({ status: 'unknown' });
        if (r.status === 'approved' && r.expires && r.expires < Date.now()) return out({ status: 'expired' });
        return out({ status: r.status === 'revoked' ? 'denied' : r.status, token: r.status === 'approved' ? r.token : undefined });
      }
      // --- cliente: datos del tour (solo con token válido)
      if (p === '/api/tour') {
        if (!await tokenOk(env, url.searchParams.get('token'))) return out({ error: 'acceso' }, 401);
        const l = await env.ACCESS.get('lotes');
        return out({ ...TOUR, estados: l ? JSON.parse(l) : {} });
      }
      // --- aprobar/rechazar desde la notificación (enlace firmado)
      if (p.startsWith('/api/a/')) {
        const id = p.split('/')[3], act = url.searchParams.get('act'), h = +url.searchParams.get('h') || 0;
        if (url.searchParams.get('s') !== await sig(env, id + act + h) || !['approve', 'deny'].includes(act)) return new Response('Enlace no valido', { status: 403 });
        const r = await decide(env, id, act, h);
        return new Response(r ? (act === 'approve' ? 'Acceso aprobado' : 'Solicitud rechazada') : 'Solicitud no encontrada', { headers: { 'Content-Type': 'text/plain; charset=utf-8', ...cors } });
      }
      // --- administrador
      if (p.startsWith('/api/admin/')) {
        if (!isAdmin(req, env)) return out({ error: 'no autorizado' }, 401);
        if (p === '/api/admin/requests') {
          const list = await env.ACCESS.list({ prefix: 'req:' }), rows = [];
          for (const k of list.keys) { const r = JSON.parse(await env.ACCESS.get(k.name)); rows.push({ id: r.id, name: r.name, phone: r.phone, status: r.status, created: r.created, expires: r.expires }); }
          rows.sort((a, b) => b.created - a.created);
          return out({ requests: rows.slice(0, 200) });
        }
        if (p === '/api/admin/decide' && req.method === 'POST') {
          const b = await req.json(); const r = await decide(env, String(b.id), b.action, +b.hours || 0);
          return out({ ok: !!r });
        }
        if (p === '/api/admin/lotes') {
          if (req.method === 'PUT') { const b = await req.json(); await env.ACCESS.put('lotes', JSON.stringify(b.lotes || {})); return out({ ok: true }); }
          const l = await env.ACCESS.get('lotes'); return out({ lotes: l ? JSON.parse(l) : {} });
        }
      }
      return out({ ok: true, app: 'altosbv-acceso' });
    } catch (e) { return out({ error: 'servidor' }, 500); }
  }
};
