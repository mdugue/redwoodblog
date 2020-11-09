import {
  Form,
  FormError,
  FieldError,
  Label,
  TextField,
  Submit,
} from '@redwoodjs/forms'
import ReactFilestack from 'filestack-react'
import { useState } from 'react'

const ImageForm = (props) => {
  const [url, setUrl] = useState(props?.image?.url)

  const onSubmit = (data) => {
    const dataWithUrl = Object.assign(data, { url })
    props.onSave(dataWithUrl, props?.image?.id)
  }

  const onFileUpload = (response) => {
    setUrl(response.filesUploaded[0].url)
  }

  return (
    <div className="rw-form-wrapper">
      <Form onSubmit={onSubmit} error={props.error}>
        <FormError
          error={props.error}
          wrapperClassName="rw-form-error-wrapper"
          titleClassName="rw-form-error-title"
          listClassName="rw-form-error-list"
        />

        <Label
          name="title"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Title
        </Label>
        <TextField
          name="title"
          defaultValue={props.image?.title}
          className="rw-input"
          errorClassName="rw-input rw-input-error"
          validation={{ required: true }}
        />
        <FieldError name="title" className="rw-field-error" />

        <ReactFilestack
          onSuccess={onFileUpload}
          apikey={process.env.REDWOOD_ENV_FILESTACK_API_KEY}
          componentDisplayMode={{ type: 'immediate' }}
          actionOptions={{ displayMode: 'inline', container: 'picker' }}
        />
        <div id="picker" style={{ marginTop: '2rem', height: '20rem' }}></div>

        <div className="rw-button-group">
          <Submit disabled={props.loading} className="rw-button rw-button-blue">
            Save
          </Submit>
        </div>
      </Form>
    </div>
  )
}

export default ImageForm
