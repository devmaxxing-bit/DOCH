type TextPreviewProps = {
  text: string
}

function TextPreview({ text }: TextPreviewProps) {
  return (
    <div className="preview" aria-live="polite">
      <span className="field-label">Предварительный просмотр</span>
      <p className={`preview-text${text ? '' : ' preview-placeholder'}`}>
        {text || 'Здесь появится введенный текст'}
      </p>
    </div>
  )
}

export default TextPreview
