type TextInputProps = {
  value: string
  onChange: (value: string) => void
}

function TextInput({ value, onChange }: TextInputProps) {
  return (
    <label className="field">
      <span className="field-label">Введите текст</span>
      <input
        className="text-input"
        type="text"
        value={value}
        onChange={(event) => onChange(event.target.value)}
        placeholder="Например, привет, мир!"
      />
    </label>
  )
}

export default TextInput
