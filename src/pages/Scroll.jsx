export default function tick() {
  
    return (
       <div className="downScrollText">
        <h2>It is {new Date().toLocaleTimeString()}</h2>
      </div>
    )
  }
  
  setInterval(tick, 1000);