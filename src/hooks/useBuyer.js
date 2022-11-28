import { useEffect, useState } from "react"

export const useBuyer = email =>{
    const [isBuyer, setIsBuyer]= useState(false)
    const [isBuyerLoading, setIsBuyerLoading] = useState(true)

        useEffect(()=>{
            if(email){
                fetch(`https://car-dealer-server.vercel.app/user/buyer/${email}`,{
                    headers: {
                        authorization: `Bearer ${localStorage.getItem('accessToken')}`
                    }
                })
                .then(res=>res.json())
                .then(data=>{
                    setIsBuyer(data.isBuyer)
                    setIsBuyerLoading(false)
                })
            }
        },[email])
        return [isBuyer, isBuyerLoading]
}