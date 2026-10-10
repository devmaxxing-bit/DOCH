import { useState } from 'react'
import Card from './Card'
import TextInput from './TextInput'
import TextPreview from './TextPreview'

function FormParent() {
  const [text, setText] = useState('')

  return (
    <Card title="Общий текст">
      <TextInput value={text} onChange={setText} />
      <TextPreview text={text} />
    </Card>
  )
}

export default FormParent
