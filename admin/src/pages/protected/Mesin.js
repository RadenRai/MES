import { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { setPageTitle } from '../../features/common/headerSlice'
import Transactions from '../../features/mesin'

function InternalPage(){
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(setPageTitle({ title : "Utilitis Mesin"}))
      }, [])


    return(
        <Transactions />
    )
}

export default InternalPage