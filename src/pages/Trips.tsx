import React from "react";
import CollageComponent from "../components/Layout/Collage/CollageComponent.tsx";

const Trips: React.FC = () => {
    const images = [
        "./assets/background.jpg",
        "./assets/background.jpg",
        "./assets/background.jpg",
        "./assets/background.jpg"
    ];

    return (
        <CollageComponent
            title="Trip #1"
            content="Here is a blog post about the trip. Itinerary, best wipeouts, etc"
            images={images}
        />
    );

} 

export default Trips;