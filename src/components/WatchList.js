import React from 'react'
function WatchList() {
    return (
        <div class="overflow-hidden rounded-lg border border-gray-200 shadow-md m-5">
            <table class="w-full border-collapse bg-white text-left text-sm text-gray-500">
                <thead class='bg-gray-50'>
                    <tr>
                        <th class="px-6 py-4 font-medium text-gray-900">Name</th>
                        <th>
                            <div className='flex'>
                                <div>Ratings</div>
                            </div>
                        </th>
                        <th>
                            <div className='flex'>
                                <div>Popularity</div>
                            </div>
                        </th>
                        <th>
                            <div className='flex'>
                                <div>Genre</div>
                            </div>
                        </th>
                    </tr>
                </thead>
                <tbody claas="divide-y divide-gray-100 border-t border-gray-100">
                <tr class="hover:bg-gray-50">
                  <td class="flex items-center px-6 py-4 font-normal text-gray-900">
                      <img src="h-[6rem] w-[10rem] object-fit"></img>
                     <div class="font-medium text-gray-700 text-sm">Star Wars</div>
                         </td>
                         <td className="pl-6 py-4">
                          7.8
                         </td>

                         <td className="pl-6 py-4">
                          7.8
                         </td>

                         <td className="py-4">
                          Action
                         </td>
                              </tr>

                </tbody>
            </table>
        </div>
    );
}
export default WatchList