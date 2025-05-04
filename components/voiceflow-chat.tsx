"use client"
import Script from "next/script"

export function VoiceflowChat() {
  return (
    <>
      <Script
        id="voiceflow-chat-script"
        strategy="afterInteractive"
        type="text/javascript"
        dangerouslySetInnerHTML={{
          __html: `
            (function(d, t) {
                var v = d.createElement(t), s = d.getElementsByTagName(t)[0];
                v.onload = function() {
                  window.voiceflow.chat.load({
                    verify: { projectID: '681645146675ec5c9d958b8c' },
                    url: 'https://general-runtime.voiceflow.com',
                    versionID: 'production',
                    voice: {
                      url: "https://runtime-api.voiceflow.com"
                    },
                    // Position the chat bubble in the right bottom corner
                    position: {
                      horizontal: 'right',
                      vertical: 'bottom',
                      offsetHorizontal: '20px',
                      offsetVertical: '20px'
                    }
                  });
                }
                v.src = "https://cdn.voiceflow.com/widget-next/bundle.mjs"; v.type = "text/javascript"; s.parentNode.insertBefore(v, s);
            })(document, 'script');
          `,
        }}
      />
    </>
  )
}
