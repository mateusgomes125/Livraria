import React, { useEffect } from 'react'

const Alerta = ({type, dismissible=true, text, onClose, timeout})=>{
  useEffect(()=>{
    if(onClose !==undefined) setTimeout(onClickClose, timeout)
  }, [])

  const onClickClose = ()=>{
    if(onClose !==undefined) onClose()
  }

  return (
    <div className={`alert alert-${type} alert-dismissible show`} role="alert">
      {text}
      {dismissible &&
        <button type="button"
          className="btn-close btn-sm"
          onClick={onClickClose}>
        </button>
      }
    </div>
  )
}

export default Alerta
