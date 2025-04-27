"use client"
import Script from "next/script"

export function ChatbotScript() {
  return (
    <>
      <Script
        id="voiceflow-chatbot"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
            (function(d, t) {
                var v = d.createElement(t), s = d.getElementsByTagName(t)[0];
                v.onload = function() {
                  window.voiceflow.chat.load({
                    verify: { projectID: '680d2021c1e2d8fd20436278' },
                    url: 'https://general-runtime.voiceflow.com',
                    versionID: 'production',
                    voice: {
                      url: "https://runtime-api.voiceflow.com"
                    },
                    position: {
                      horizontal: 'right',
                      vertical: 'bottom'
                    },
                    spacing: {
                      horizontal: '20px',
                      vertical: '20px'
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
