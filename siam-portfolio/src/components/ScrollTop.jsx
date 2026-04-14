/ =============================
// src/components/ScrollTop.jsx
// =============================
export default function ScrollTop(){
  return (
    <button onClick={()=>window.scrollTo({top:0,behavior:'smooth'})}
    className="fixed bottom-4 right-4 bg-blue-500 text-white p-2">↑</button>
  )
}