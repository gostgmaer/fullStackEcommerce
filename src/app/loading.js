import React from 'react'

const Loading = () => {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black opacity-95 z-50">
      <div className="flex space-x-4">
        {/* Animated Dots */}
        <div className="w-4 h-4 bg-white rounded-full animate-bounce glow    delay-75"></div>
        <div className="w-4 h-4 bg-white rounded-full animate-bounce glow delay-100"></div>
        <div className="w-4 h-4 bg-white rounded-full animate-bounce glow delay-150"></div>
        <div className="w-4 h-4 bg-white rounded-full animate-bounce glow delay-200"></div>
      </div>
    </div>
  )
}

export default Loading