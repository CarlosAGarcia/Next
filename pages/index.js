import StyledMain from '../styledPages/StyledMain.style'
// import PublicRoutes from './browserRoutes/PublicRoutes'
import { useStore } from '../stores/subdomainStore'
import React, { useEffect } from 'react';

// Welcome to the train station. Routes chosen here :)
/*

                                             ______
                                          .-"""".._'.       _,##
                                   _..__ |.-"""-.|  |   _,##'`-._
                                  (_____)||_____||  |_,##'`-._,##'`
                                  _|   |.;-""-.  |  |#'`-._,##'`
                               _.;_ `--' `\    \ |.'`\._,##'`
                              /.-.\ `\     |.-";.`_, |##'`
                              |\__/   | _..;__  |'-' /
                              '.____.'_.-`)\--' /'-'`
                               //||\\(_.-'_,'-'`
                             (`-...-')_,##'`
                      jgs _,##`-..,-;##`
                       _,##'`-._,##'`
                    _,##'`-._,##'`
                      `-._,##'`

*/

export default function Home() {
  const setSubdomain = useStore(state => state.setSubdomain)
  const subdomain = useStore(state => state.subdomain)
  const windowExists = typeof window !== "undefined"

  // fix so constant updates on subdomain
  
  useEffect(() => {
    // Next js only creates a window object in the browser. It will be undef before then.
    // Assume this will not be undef in browser
    if (windowExists) {
      // browser code
      // const subdomain = window.location.hostname
      // console.log(subdomain)
  
      var newSubdomain = window.location.host.split('.')[1] ? window.location.host.split('.')[0] : null;
      if (newSubdomain !== subdomain) {
        setSubdomain(newSubdomain)
        console.log(newSubdomain)
      }
    }
  }, [ windowExists, subdomain ])

  return (
    <StyledMain>
      <div/>
    </StyledMain>
  )
}
