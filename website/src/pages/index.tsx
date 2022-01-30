import Head from 'next/head'
import { useEffect, useLayoutEffect, useRef, useState } from 'react'
import { CSSProperties } from 'react'

export default function Home() {
    const aspectRatio = 0.1
    const parent: CSSProperties = {
        position: 'relative',
        width: '100%',
        maxWidth: '100%',
        height: 'auto',
        margin: '24px auto',
    }
    const child: CSSProperties = {
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        width: '100%',
        height: '100%',
    }
    const spacerStyle = {
        paddingTop: Number(aspectRatio * 100).toFixed(2) + '%',
    }
    const iframeNode = useRef<HTMLIFrameElement>(null)
    const [frameId] = useState(() => {
        return 'xxx'
    })

    // useEffect(function _updateIframeContent() {
    //     const iframe = iframeNode.current!

    //     let doc: Document = (iframe as any).document
    //     if (iframe.contentDocument) doc = iframe.contentDocument
    //     else if (iframe.contentWindow) doc = iframe.contentWindow.document

    //     // const gistLink = this._defineUrl()
    //     const gistScript = `` //  `<script type="text/javascript" src="${gistLink}"></script>`
    //     const styles = `<style></style>`
    //     const resizeScript = `onload=`
    //     const iframeHtml = `<html><head><base target="_parent">${styles}</head><body style="margin:0" ${resizeScript}>${gistScript}</body></html>`

    //     // doc.open()
    //     doc.onload =
    //         ""
    //     // doc.close()
    // })

    return (
        <div className=''>
            <iframe
                id={frameId}
                ref={iframeNode}
                src={'/gallery'}
                frameBorder={0}
                scrolling='no'
                // style={child}
                className='h-auto w-full max-w-full'
                // sandbox='allow-scripts allow-popups allow-top-navigation-by-user-activation allow-forms allow-same-origin'
                allowFullScreen
                // loading='lazy'
            />
        </div>
    )
}
