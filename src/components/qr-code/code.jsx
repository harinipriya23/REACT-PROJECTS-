import { useState } from 'react'
import QRCode from 'react-qr-code'

export function QrCodeGenerator() {

    const [qrCode, setQrCode] = useState("");
    const [input,setInput] = useState ('')

    function handleGeneratingQrCode() {
        console.log('click')
        setQrCode(input)
        setInput('')
        console.log('output')
    }

    return <div> 
        <h1 className="text-center font-extrabold text-3xl m-2">QR Code Generator</h1>
        <div className="text-center">
            <input placeholder="Enter your text here" type="text" value={input} 
            className="p-2 border-2" name='qr-code'
            onChange={(e)=>setInput(e.target.value)}
            />
            <button className="border-2 m-2 p-2"
            disabled={ input && input.trim() !== '' ? false : true}
            onClick={()=>handleGeneratingQrCode()}>Generate</button>
        </div>
        <div>
           <QRCode
           id='qr-code-id'
           value={qrCode}
           size={450}
           className='flex m-5 p-4 justify-center align-middle'
           />
            
        </div>
    </div>
}