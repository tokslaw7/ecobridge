import React from "react";
// import {useLocation} from "react-router-dom";
// import {useQuery} from "@tanstack/react-query";
// import queryKeys from "../../services/queryKeys";
// import {MusicData, musicData} from "../../services/services";

export default function Music (){

    // const location = useLocation();
    // const pathname = location.pathname;
    // const lastPart = pathname.split('/').pop();
    //
    // const {data, isFetching, isError, error} = useQuery({
    //     queryKey: queryKeys.music,
    //     queryFn: () => MusicData(lastPart)
    // })
        return (
            <div className="bg-white p-6 rounded-lg shadow-lg border-2 border-gray-200 mt-8">
                <h2 className="text-xl font-semibold mb-4 text-gray-800">Music </h2>
                <ul className="space-y-2 text-gray-700">
                    <li> Use visuals and timers to support understanding.</li>
                    <li> Celebrate small wins with hugs, stickers, or kind words.</li>
                    <li> Keep routines consistent and predictable.</li>
                    <li> Involve children in daily decisions to boost confidence.</li>
                </ul>
            </div>
            )

}
