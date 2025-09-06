function App() {
  return (
  <>
      {/* Yöntem 1: Tailwind arbitrary values ile */}
      <div className="grid grid-cols-1 lg:grid-cols-[20%_60%_20%]  gap-2 p-4">
        <div className="left-sidebar bg-blue-100 p-4 rounded">
          Left Sidebar (20%)
          
        </div>
        <div className="map bg-green-100 p-4 rounded">
          Map Area (60%)
        </div>
        <div className="right-sidebar bg-red-100 p-4 rounded">
          legend bar (20%)
        </div>
      </div>
      
 
      
    
      
    
 </>
  );
}

export default App;