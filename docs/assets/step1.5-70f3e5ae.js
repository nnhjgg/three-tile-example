import"./modulepreload-polyfill-3cfb730f.js";import{c as x,V as i,b as y,A as w,G as f,i as m,s as u,j as L,m as h,e as E}from"./util-7385d603.js";import{C as S,a as g}from"./CSS2DRenderer-831dcb0d.js";const s=x(E,h),p=s.project(95,25),v=new i(p.x,p.y,0),b=new i(0,-2e3,3e3),e=y("#map",v,b);e.scene.add(s);const c=new S;c.setSize(e.container.clientWidth,e.container.clientHeight);c.domElement.style.position="absolute";e.container.appendChild(c.domElement);e.addEventListener("update",()=>{c.render(e.scene,e.camera)});window.addEventListener("resize",()=>c.setSize(e.container.clientWidth,e.container.clientHeight));e.controls.addEventListener("change",()=>{c.domElement.style.display=e.controls.getDistance()<1e4?"inline":"none"});(()=>{const n=new w(3e3);n.position.set(p.x,p.y,10),e.scene.add(n)})();const l=new f;s.add(l);(()=>{const n=new i(0,0,1);for(let t=60;t<140;t+=10)for(let o=0;o<70;o+=10){const a=s.project(t,o),r=new m(n,new i(a.x,a.y,-1),50);l.add(r)}l.traverse(t=>{if(t instanceof m){const o=document.createElement("span");o.className="label";const a=s.unProject(t.position.x,t.position.y);o.innerHTML=`${a.lon.toFixed(0)},${a.lat.toFixed(0)}`,o.addEventListener("mouseenter",()=>{const d=s.getLocalInfoFromLocation(a.lon,a.lat);d&&(o.title=`场景坐标：
x: ${d.point.x.toFixed(3)}
y: ${d.point.y.toFixed(3)}
z: ${d.point.z.toFixed(3)}`)});const r=new g(o);r.position.copy(t.position.clone().add(new i(0,0,10))),l.add(r)}})})();(()=>{const n=new w;e.scene.add(n),e.controls.addEventListener("change",()=>{e.camera.updateMatrixWorld();const t=new i(-.9,-.85,0).unproject(e.camera);n.position.copy(t),n.scale.setScalar(n.position.distanceTo(e.camera.position)/50)})})();u(e,s);L(s);