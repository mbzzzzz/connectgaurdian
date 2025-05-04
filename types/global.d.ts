interface Window {
  voiceflow?: {
    chat: {
      load: (config: any) => void
      updateConfig: (config: any) => void
    }
  }
}
