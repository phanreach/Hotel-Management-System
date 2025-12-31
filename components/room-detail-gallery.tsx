import React from 'react';

const RoomDetailGallery = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-4 gap-4 h-[400px] md:h-[500px] mb-10 overflow-hidden rounded-xl">
      
      {/* Large Main Image (Occupies 3 columns on desktop) */}
      <div className="col-span-1 md:col-span-3 h-full group relative cursor-pointer overflow-hidden">
        <div 
          className="w-full h-full bg-center bg-no-repeat bg-cover transition-transform duration-700 group-hover:scale-105"
          style={{ backgroundImage: 'url("https://images.unsplash.com/photo-1631049307264-da0ec9d70304?q=80&w=2070&auto=format&fit=crop")' }}
          aria-label="Spacious luxury hotel suite with king bed and floor to ceiling windows overlooking a city skyline"
        >
        </div>
        <div className="absolute bottom-4 left-4 bg-black/50 backdrop-blur-md px-3 py-1 rounded text-white text-sm font-medium">
          Main Bedroom
        </div>
      </div>
      
      {/* Sidebar Images (Occupies 1 column on desktop) */}
      <div className="col-span-1 flex flex-col gap-4 h-full">
        {/* Top Sidebar Image */}
        <div 
          className="flex-1 w-full bg-center bg-no-repeat bg-cover rounded-lg relative group cursor-pointer overflow-hidden"
          style={{ backgroundImage: 'url("https://images.unsplash.com/photo-1584132967334-10e028bd69f7?q=80&w=2070&auto=format&fit=crop")' }}
          aria-label="Modern bathroom with marble countertops and a large illuminated mirror"
        >
          <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors"></div>
        </div>

        {/* Bottom Sidebar Image with "View All" Overlay */}
        <div 
          className="flex-1 w-full bg-center bg-no-repeat bg-cover rounded-lg relative group cursor-pointer overflow-hidden"
          style={{ backgroundImage: 'url("https://images.unsplash.com/photo-1595526114035-0d45ed16cfbf?q=80&w=2070&auto=format&fit=crop")' }}
          aria-label="Cozy lounge area in hotel room with sofa and coffee table"
        >
          <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors"></div>
          <div className="absolute inset-0 flex items-center justify-center bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity">
            <span className="text-white font-bold flex items-center gap-1">
              <span className="material-symbols-outlined">grid_view</span> 
              View All
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RoomDetailGallery;