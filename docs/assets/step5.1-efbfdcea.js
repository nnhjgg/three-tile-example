import"./modulepreload-polyfill-3cfb730f.js";import{c as y,V as c,b as M,C as x,G as v,l as g,B as C,q as b,h as w,P as L,T as _,o as B,bm as D,ap as F,K as G,s as j,j as z,m as P,e as V,z as k,k as I}from"./util-bf818b98.js";import{g as T}from"./lil-gui.module.min-a1e98589.js";const o=y([V,k],P),f=o.project(105,28),E=new c(f.x,f.y,0),U=new c(0,-2e3,3e3),r=M("#map",E,U);r.scene.add(o);r.scene.background=new x(0);o.addEventListener("tile-loaded",a=>{a.tile.material.forEach(t=>{var e;return(e=t.color)==null?void 0:e.set(new x(8947848))})});const H=(a,t,e)=>{const n=o.project(a.x,a.y),s=o.project(t.x,t.y),p=new c(s.x-n.x,s.y-n.y,1),S=new c(n.x+p.x/2,s.y-p.y/2,e),u=new I;return u.setPosition(S),u.scale(p),u},d=((a,t)=>{const e=new v;e.applyMatrix4(H(a,t,1)),e.scale.setZ(200),e.translateZ(100),e.renderOrder=10;const n=new g(new C),s=new b(n,16711935);return e.add(s),e})(new w(67,11),new w(140,57)),l=(()=>{const a=new g(new L(1,1,529,420),O({scale:.5}));return N(a,"../../image/SATE_L1_F2G_VISSR_MWB_NOM_FDI-202107241900.HDF.png"),a})();d.add(l);r.scene.add(d);const h=new T,i=h.addFolder("卫星云图");i.add(d.scale,"z",100,500,1).name("垂直拉伸").onChange(a=>d.position.z=a/2);i.addColor(l.material,"color").name("颜色");i.add(l.material,"opacity",.1,1,.1).name("透明度");i.add(l.material,"wireframe").name("网格");const m=h.addFolder("环境设置");m.addColor(r.ambLight,"color").name("环境光颜色");m.add(r.ambLight,"intensity",0,1,.1).name("环境光强度");m.addColor(r.dirLight,"color").name("直射光颜色");m.add(r.dirLight,"intensity",0,1,.1).name("直射光强度");function N(a,t){var e;return(e=a.material.map)==null||e.dispose(),a.material.map=new _().load(t,n=>{n.needsUpdate=!0}),a}function O(a={scale:1}){const t=new B({displacementMap:new D,transparent:!0,displacementScale:a.scale,displacementBias:0,side:F,opacity:.6,color:new x(13421772)});return t.onBeforeCompile=e=>{e.vertexShader=`uniform sampler2D map;
        `+e.vertexShader,e.vertexShader=e.vertexShader.replace("#include <displacementmap_vertex>","transformed += normalize( objectNormal ) * ( texture2D(map, vMapUv ).a * displacementScale + displacementBias );"),e.fragmentShader=e.fragmentShader.replace("#include <alphamap_fragment>",`
            #include <alphamap_fragment>
            float h = texture2D(map, vMapUv ).a;
            diffuseColor.rgb *= h;
            diffuseColor.a = clamp(diffuseColor.a * 2.0, 0.0, 1.0);
            `)},t}G(o);j(r,o);z(o);