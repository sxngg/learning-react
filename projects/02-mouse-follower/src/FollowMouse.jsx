import { useState, useEffect } from "react";

export function FollowMouse() {
    /**
   * * State para cambiar botón de Activar a Desactivar
   */
    const [enabled, setEnabled] = useState(false);

    /**
     * State para posición del ratón
     */
    const [position, setPosition] = useState({ x: 0, y: 0 })

    /** 
     * * useEffect para pointer move 
     */
    useEffect(() => {

        //Se crea el efecto de que el div siga el pointer
        console.log('effect', { enabled })
        const handleMove = (event) => {
            const { clientX, clientY } = event
            setPosition({ x: clientX, y: clientY })
        }
        if (enabled) {
            window.addEventListener('pointermove', handleMove)
        }

        // cleanup: para eso sirve el return de useEffect
        // -> cuando el componente se desmonta
        // -> cuando cambian las dependencias, antes de ejecutar
        //    el efecto de nuevo
        return () => {
            console.log('cleanup')
            window.removeEventListener('pointermove', handleMove)
        }
    }, [enabled])

    useEffect(() => {
        document.body.classList.toggle('no-cursor', enabled)

        return () => {
            document.body.classList.remove('no-cursor')
        }
    }, [enabled])

    // [] -> solo se ejecuta una vez cuando se monta el componente
    // [enabled] -> se ejecuta cuando cambia enabled y cuando se monta el componente
    // undefined -> se ejecuta cada vez que se renderiza el componente

    return (
        <>
            <div style={{
                position: 'absolute',
                backgroundColor: 'rgba(0, 0, 0, 0.5)',
                border: '1px solid #fff',
                borderRadius: '50%',
                opacity: 0.8,
                pointerEvents: 'none',
                left: -25,
                top: -25,
                width: 50,
                height: 50,
                transform: `translate(${position.x}px, ${position.y}px)`
            }}
            />

            <button onClick={() => {
                setEnabled(!enabled)
            }}>
                {enabled ? 'Activar' : 'Desactivar'}
            </button>
        </>
    )
}