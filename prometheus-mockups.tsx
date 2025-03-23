import React from 'react';

const PrometheusAppMockups = () => {
  return (
    <div className="bg-gray-100 p-6 rounded-lg">
      <h1 className="text-2xl font-bold mb-6 text-center">Prometheus App Mockups</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* KI-Coach Screen */}
        <div className="bg-black p-6 rounded-xl overflow-hidden shadow-lg">
          <div className="text-center mb-4">
            <h2 className="text-xl text-white font-bold">KI-Coach Interface</h2>
          </div>
          
          <div className="mb-4 p-4 bg-gray-900 rounded-lg">
            <div className="text-white text-lg mb-2">Performance Metrics</div>
            <div className="grid grid-cols-2 gap-2">
              <div className="bg-gray-800 p-3 rounded-lg">
                <div className="text-gray-400 text-sm">Bar Path</div>
                <div className="text-white text-xl font-bold">83%</div>
              </div>
              <div className="bg-gray-800 p-3 rounded-lg">
                <div className="text-gray-400 text-sm">Velocity</div>
                <div className="text-white text-xl font-bold">0.5 m/s</div>
              </div>
              <div className="bg-gray-800 p-3 rounded-lg">
                <div className="text-gray-400 text-sm">TUT</div>
                <div className="text-white text-xl font-bold">2.3 sec</div>
              </div>
              <div className="bg-gray-800 p-3 rounded-lg">
                <div className="text-gray-400 text-sm">1RM</div>
                <div className="text-white text-xl font-bold">110 kg</div>
              </div>
            </div>
          </div>
          
          <div className="mb-4 p-4 bg-orange-700 rounded-lg text-white">
            <p className="font-bold mb-2">AI Coach:</p>
            <p>Hi! I'm your AI coach. Would you like to create your workout plan?</p>
          </div>
        </div>
        
        {/* Coach Dashboard */}
        <div className="bg-black p-6 rounded-xl overflow-hidden shadow-lg">
          <div className="text-center mb-4">
            <h2 className="text-xl text-white font-bold">Coach Dashboard</h2>
          </div>
          
          <div className="mb-4 p-4 bg-gray-900 rounded-lg">
            <div className="text-white text-lg mb-2">Interaction Index</div>
            <div className="grid grid-cols-2 gap-2">
              <div className="bg-gray-800 p-3 rounded-lg">
                <div className="text-gray-400 text-sm">Sarah Johnson</div>
                <div className="text-red-500 text-xl font-bold">29%</div>
              </div>
              <div className="bg-gray-800 p-3 rounded-lg">
                <div className="text-gray-400 text-sm">John Smith</div>
                <div className="text-orange-500 text-xl font-bold">43%</div>
              </div>
              <div className="bg-gray-800 p-3 rounded-lg">
                <div className="text-gray-400 text-sm">Emily Davis</div>
                <div className="text-green-500 text-xl font-bold">78%</div>
              </div>
              <div className="bg-gray-800 p-3 rounded-lg">
                <div className="text-gray-400 text-sm">Mike Hudson</div>
                <div className="text-green-500 text-xl font-bold">95%</div>
              </div>
            </div>
          </div>
          
          <div className="p-4 bg-gray-900 rounded-lg">
            <div className="text-white text-lg mb-2">Client Alerts</div>
            <div className="space-y-2">
              <div className="p-3 bg-red-900 bg-opacity-30 rounded-lg">
                <div className="text-white font-bold">Sarah Johnson</div>
                <div className="text-gray-300 text-sm">No interaction for a long time.</div>
              </div>
              <div className="p-3 bg-orange-900 bg-opacity-30 rounded-lg">
                <div className="text-white font-bold">John Smith</div>
                <div className="text-gray-300 text-sm">Training adherence drops by 25%.</div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Nutrition Tracker */}
        <div className="bg-black p-6 rounded-xl overflow-hidden shadow-lg">
          <div className="text-center mb-4">
            <h2 className="text-xl text-white font-bold">Nutrition Tracker</h2>
          </div>
          
          <div className="mb-4 p-4 bg-green-900 bg-opacity-20 rounded-lg">
            <div className="flex">
              <div className="w-1/2">
                <div className="text-green-400 text-sm">Calories Left</div>
                <div className="text-white text-3xl font-bold">2000</div>
                <div className="text-green-500 text-sm">+798</div>
              </div>
              <div className="w-1/2">
                <div className="mb-2">
                  <div className="flex justify-between">
                    <span className="text-gray-300 text-sm">Protein</span>
                    <span className="text-white text-sm">20/70g</span>
                  </div>
                  <div className="h-2 bg-gray-700 rounded-full">
                    <div className="h-2 bg-green-500 rounded-full w-1/4"></div>
                  </div>
                </div>
                <div className="mb-2">
                  <div className="flex justify-between">
                    <span className="text-gray-300 text-sm">Carbs</span>
                    <span className="text-white text-sm">30/70g</span>
                  </div>
                  <div className="h-2 bg-gray-700 rounded-full">
                    <div className="h-2 bg-green-500 rounded-full w-2/5"></div>
                  </div>
                </div>
                <div>
                  <div className="flex justify-between">
                    <span className="text-gray-300 text-sm">Fats</span>
                    <span className="text-white text-sm">20/40g</span>
                  </div>
                  <div className="h-2 bg-gray-700 rounded-full">
                    <div className="h-2 bg-green-500 rounded-full w-1/2"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          <div className="p-4 bg-gray-900 rounded-lg">
            <div className="text-white text-lg mb-2">Today's Food</div>
            <div className="space-y-2">
              <div className="p-3 bg-gray-800 rounded-lg flex justify-between">
                <div>
                  <div className="text-white">Meal Title</div>
                  <div className="text-gray-400 text-sm">Protein 10g, Carbs 30g, Fats 8g</div>
                </div>
                <div className="text-white">250 kcal</div>
              </div>
              <div className="p-3 bg-gray-800 rounded-lg flex justify-between">
                <div>
                  <div className="text-white">Meal Title</div>
                  <div className="text-gray-400 text-sm">Protein 10g, Carbs 30g, Fats 8g</div>
                </div>
                <div className="text-white">250 kcal</div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Client Progress */}
        <div className="bg-black p-6 rounded-xl overflow-hidden shadow-lg">
          <div className="text-center mb-4">
            <h2 className="text-xl text-white font-bold">Client Progress</h2>
          </div>
          
          <div className="mb-4 p-4 bg-gray-900 rounded-lg">
            <div className="text-white text-lg mb-2">Main Goals</div>
            <div className="grid grid-cols-3 gap-2">
              <div className="p-3 bg-gray-800 rounded-lg text-center">
                <div className="mx-auto h-12 w-12 rounded-full flex items-center justify-center border-4 border-green-500">
                  <span className="text-white font-bold">92%</span>
                </div>
                <div className="mt-2 text-gray-400 text-xs">Body Weight</div>
                <div className="text-white text-sm font-bold">118 kg</div>
                <div className="text-red-500 text-xs">-5 kg</div>
              </div>
              <div className="p-3 bg-gray-800 rounded-lg text-center">
                <div className="mx-auto h-12 w-12 rounded-full flex items-center justify-center border-4 border-yellow-500">
                  <span className="text-white font-bold">75%</span>
                </div>
                <div className="mt-2 text-gray-400 text-xs">Bench Press</div>
                <div className="text-white text-sm font-bold">162 kg</div>
                <div className="text-green-500 text-xs">+5 kg</div>
              </div>
              <div className="p-3 bg-gray-800 rounded-lg text-center">
                <div className="mx-auto h-12 w-12 rounded-full flex items-center justify-center border-4 border-green-500">
                  <span className="text-white font-bold">92%</span>
                </div>
                <div className="mt-2 text-gray-400 text-xs">Deadlift</div>
                <div className="text-white text-sm font-bold">192 kg</div>
                <div className="text-green-500 text-xs">+7 kg</div>
              </div>
            </div>
          </div>
          
          <div className="p-4 bg-gray-900 rounded-lg">
            <div className="text-white text-lg mb-2">Measurements</div>
            <div className="grid grid-cols-3 gap-2">
              <div className="p-3 bg-gray-800 rounded-lg">
                <div className="text-white text-xl font-bold">123 kg</div>
                <div className="text-gray-400 text-xs mt-2">Body Weight</div>
              </div>
              <div className="p-3 bg-gray-800 rounded-lg">
                <div className="text-white text-xl font-bold">178 kg</div>
                <div className="text-gray-400 text-xs mt-2">Back Squat 1RM</div>
              </div>
              <div className="p-3 bg-gray-800 rounded-lg">
                <div className="text-white text-xl font-bold">185 kg</div>
                <div className="text-gray-400 text-xs mt-2">Deadlift 1RM</div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <div className="mt-6 p-4 bg-orange-600 rounded-lg text-white text-center">
        <h2 className="text-xl font-bold mb-2">Coach & Influencer Royalty Program</h2>
        <p>Earn 4$ for every client you refer to Prometheus - passive income without investment!</p>
      </div>
    </div>
  );
};

export default PrometheusAppMockups;