import { EffectCallback, useEffect } from 'react'

function useEffectOnce(effect: EffectCallback) {
  // eslint-disable-next-line react-hooks/exhaustive-deps
  useEffect(()=>{
    if(!effect){console.log("add logic")};
    effect;
  }, [])
}

export default useEffectOnce
