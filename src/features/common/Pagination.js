import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/24/outline";
import { ITEMs_PER_PAGE } from "../../app/constants";

export default function Pagination({page,setPage,handlePage,totalItems}) {
    const totalPage = Math.ceil(totalItems / ITEMs_PER_PAGE);
  
    return ( <>
     <div className="flex flex-1 justify-between sm:hidden">
                    <div
                      onClick={(e) =>handlePage(page>1?page-1:page)}
                      className="relative inline-flex items-center  cursor-pointer rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50"
                    >
                      Previous
                    </div>
                    <div
                      onClick={(e) =>handlePage(  page<totalPage?page+1:page)}
                      className="relative ml-3 inline-flex cursor-pointer items-center rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50"
                    >
                      Next
                    </div>
                  </div>
                  <div className="hidden sm:flex sm:flex-1 sm:items-center sm:justify-between">
                    <div>
                      <p className="text-sm text-gray-700">
                        Showing <span className="font-medium">{(page-1)*ITEMs_PER_PAGE+1}</span> to{" "}
                        <span className="font-medium">{page*ITEMs_PER_PAGE>totalItems?totalItems: page*ITEMs_PER_PAGE}</span> of{" "}
                        <span className="font-medium">{totalItems}</span> results
                      </p>
                    </div>
                    <div>
                      <nav
                        aria-label="Pagination"
                        className="isolate inline-flex -space-x-px rounded-md shadow-sm"
                      >
  
  
                        <div
                          onClick={(e) =>handlePage(page>1?page-1:page)}
                          className="relative inline-flex items-center rounded-l-md px-2 py-2 text-gray-400 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-20 focus:outline-offset-0"
                        >
                          <span className="sr-only">Previous</span>
                          <ChevronLeftIcon
                            aria-hidden="true"
                            className="size-5"
                          />
                        </div>
                        {/* Current: "z-10 bg-indigo-600 text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600", Default: "text-gray-900 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:outline-offset-0" */}
                        
                        {Array.from({length:totalPage}).map((el,index) =>
  
                     (  <div key={index}
                          onClick={e =>handlePage(index+1)}
                          aria-current="page"
                          className={`relative z-10 inline-flex items-center cursor-pointer ${index+1===page?' bg-indigo-600  text-white ': 'text-gray-400'} px-4 py-2 text-sm font-semiboldfocus:z-20 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600`}
                        >
                          {index+1}
                        </div>
                        
                      
                      )
                        )
                    
                        }
                        
                       
                       
  
                        <div
                      
                          onClick={(e) =>handlePage(  page<totalPage?page+1:page)}
                          className="relative inline-flex items-center rounded-r-md px-2 py-2 text-gray-400 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-20 focus:outline-offset-0"
                        >
                          <span className="sr-only">Next</span>
                          <ChevronRightIcon
                            aria-hidden="true"
                            className="size-5"
                          />
                        </div>
  
  
                      </nav>
                    </div>
                  </div>
    </> );
  }