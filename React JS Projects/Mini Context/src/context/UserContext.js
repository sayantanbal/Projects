/*
    step 1 - 
        imported "useContext". then created a variable, "UserContext" that can hold created context by method createContext() and passed it to "UserContext". 
            it gives us a provider and consumer. provider is used to wrap the components and consumer is used to access the data from the provider. so we're wraping all the components in "UserContext" variable to have a global access to the data.
    step 2 -
        we need to make a provider.





*/


import React, { useContext } from 'react'

const UserContext = React.createContext()

export default UserContext;
