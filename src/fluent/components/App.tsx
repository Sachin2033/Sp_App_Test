import React, { useState } from 'react'
import {
  FluentProvider,
  webLightTheme,
  Button,
  Input,
  Dropdown,
  Option,
  Card,
  CardHeader,
  Text,
  makeStyles,
  tokens
} from '@fluentui/react-components'

const useStyles = makeStyles({
  wrapper: {
    padding: '32px',
    maxWidth: '600px',
    margin: '0 auto'
  },
  card: {
    padding: '24px',
    marginBottom: '16px'
  },
  field: {
    display: 'flex',
    flexDirection: 'column',
    gap: '6px',
    marginBottom: '16px'
  },
  title: {
    fontSize: tokens.fontSizeBase600,
    fontWeight: tokens.fontWeightBold,
    marginBottom: '24px',
    color: tokens.colorBrandForeground1
  },
  success: {
    padding: '16px',
    background: tokens.colorStatusSuccessBackground1,
    borderRadius: tokens.borderRadiusMedium,
    marginBottom: '16px'
  },
  row: {
    display: 'flex',
    gap: '12px',
    marginTop: '8px'
  }
})

const App = () => {
  const styles = useStyles()
  const [form, setForm] = useState({
    title: '',
    description: '',
    priority: '',
    category: ''
  })
  const [submitted, setSubmitted] = useState(false)
  const [loading, setLoading] = useState(false)

  const handleSubmit = () => {
    if (!form.title || !form.priority) return
    setLoading(true)
    setTimeout(() => {
      setLoading(false)
      setSubmitted(true)
    }, 1000)
  }

  const handleReset = () => {
    setForm({ title: '', description: '', priority: '', category: '' })
    setSubmitted(false)
  }

  return (
    <FluentProvider theme={webLightTheme}>
      <div className={styles.wrapper}>

        <div className={styles.title}>
          🚀 SpApp — New Application Form
        </div>

        {submitted ? (
          <Card className={styles.card}>
            <div className={styles.success}>
              <Text weight="bold">✅ Application Submitted!</Text>
              <br />
              <Text>Title: {form.title}</Text>
              <br />
              <Text>Priority: {form.priority}</Text>
              <br />
              <Text>Category: {form.category}</Text>
            </div>
            <Button appearance="secondary" onClick={handleReset}>
              Submit Another
            </Button>
          </Card>
        ) : (
          <Card className={styles.card}>

            {/* Title */}
            <div className={styles.field}>
              <Text weight="semibold">Application Title *</Text>
              <Input
                placeholder="Enter application title"
                value={form.title}
                onChange={(e) =>
                  setForm({ ...form, title: e.target.value })}
              />
            </div>

            {/* Description */}
            <div className={styles.field}>
              <Text weight="semibold">Description</Text>
              <Input
                placeholder="Enter description"
                value={form.description}
                onChange={(e) =>
                  setForm({ ...form, description: e.target.value })}
              />
            </div>

            {/* Priority */}
            <div className={styles.field}>
              <Text weight="semibold">Priority *</Text>
              <Dropdown
                placeholder="Select priority"
                onOptionSelect={(_, data) =>
                  setForm({ ...form, priority: data.optionValue || '' })}
              >
                <Option value="Critical">🔴 Critical</Option>
                <Option value="High">🟠 High</Option>
                <Option value="Medium">🟡 Medium</Option>
                <Option value="Low">🟢 Low</Option>
              </Dropdown>
            </div>

            {/* Category */}
            <div className={styles.field}>
              <Text weight="semibold">Category</Text>
              <Dropdown
                placeholder="Select category"
                onOptionSelect={(_, data) =>
                  setForm({ ...form, category: data.optionValue || '' })}
              >
                <Option value="IT">💻 IT</Option>
                <Option value="HR">👥 HR</Option>
                <Option value="Finance">💰 Finance</Option>
                <Option value="Operations">⚙️ Operations</Option>
              </Dropdown>
            </div>

            {/* Buttons */}
            <div className={styles.row}>
              <Button
                appearance="primary"
                onClick={handleSubmit}
                disabled={loading || !form.title || !form.priority}
              >
                {loading ? 'Submitting...' : 'Submit Application'}
              </Button>
              <Button appearance="secondary" onClick={handleReset}>
                Clear
              </Button>
            </div>

          </Card>
        )}
      </div>
    </FluentProvider>
  )
}

export default App