'use client'

import { useEffect, useRef, useState } from 'react'

import { NUC_HOME_CONTACT_TYPES, NUC_HOME_COPY } from '../../constants/content'
import { setHomeContactDialogOverflow } from '../../utils/contact_dialog_overflow'
import {
  type HomeContactWebsiteType,
  submitHomeContactForm,
  validateHomeContactForm,
} from '../../utils/submit_contact_form'

import 'nucleify-ui/components/nui-dialog'
import 'nucleify-ui/components/nui-input-text'
import 'nucleify-ui/components/nui-select'

import './_index.scss'

const copy = NUC_HOME_COPY
const year = new Date().getFullYear()
const typeOptions = [...NUC_HOME_CONTACT_TYPES]

function focusNuiInput(el: HTMLElement | null): void {
  const host = el as HTMLElement & { shadowRoot?: ShadowRoot | null }
  const input =
    host?.shadowRoot?.querySelector('input') || host?.querySelector?.('input')
  if (input instanceof HTMLInputElement) input.focus()
}

export function NucHomeClose() {
  const [dialogReady, setDialogReady] = useState(false)
  const [open, setOpen] = useState(false)
  const [loading, setLoading] = useState(false)
  const [email, setEmail] = useState('')
  const [websiteType, setWebsiteType] = useState('')
  const [errors, setErrors] = useState<{
    email?: string
    website_type?: string
  }>({})

  const dialogRef = useRef<HTMLElement & { visible?: boolean }>(null)
  const emailRef = useRef<HTMLElement>(null)
  const selectRef = useRef<HTMLElement & { options?: typeof typeOptions }>(null)

  useEffect(() => {
    setDialogReady(true)
  }, [])

  useEffect(() => {
    const dialog = dialogRef.current
    if (!dialog) return
    dialog.visible = open
  }, [dialogReady, open])

  useEffect(() => {
    const dialog = dialogRef.current
    if (!dialog) return

    const onDialogChange = (event: Event) => {
      const visible = (event as CustomEvent<{ visible: boolean }>).detail
        .visible
      setOpen(visible)
      if (!visible) {
        setHomeContactDialogOverflow(dialog, false)
        setEmail('')
        setWebsiteType('')
        setErrors({})
      }
    }
    const onDialogHide = () => {
      setHomeContactDialogOverflow(dialog, false)
      setOpen(false)
      setEmail('')
      setWebsiteType('')
      setErrors({})
    }
    const onDialogShow = () => {
      setHomeContactDialogOverflow(dialog, true)
      window.setTimeout(() => focusNuiInput(emailRef.current), 40)
    }

    dialog.addEventListener('change', onDialogChange)
    dialog.addEventListener('hide', onDialogHide)
    dialog.addEventListener('show', onDialogShow)
    return () => {
      dialog.removeEventListener('change', onDialogChange)
      dialog.removeEventListener('hide', onDialogHide)
      dialog.removeEventListener('show', onDialogShow)
    }
  }, [dialogReady])

  useEffect(() => {
    if (!open) return

    let cancelled = false
    const cleanups: Array<() => void> = []

    const frame = requestAnimationFrame(() => {
      if (cancelled) return
      const emailEl = emailRef.current
      const selectEl = selectRef.current
      if (!emailEl || !selectEl) return

      selectEl.options = typeOptions

      const onEmail = (event: Event) => {
        setEmail((event as CustomEvent<{ value: string }>).detail.value)
        setErrors((prev) => ({ ...prev, email: undefined }))
      }
      const onType = (event: Event) => {
        setWebsiteType((event as CustomEvent<{ value: string }>).detail.value)
        setErrors((prev) => ({ ...prev, website_type: undefined }))
      }

      emailEl.addEventListener('input', onEmail)
      selectEl.addEventListener('nui-change', onType)
      cleanups.push(() => {
        emailEl.removeEventListener('input', onEmail)
        selectEl.removeEventListener('nui-change', onType)
      })
    })

    return () => {
      cancelled = true
      cancelAnimationFrame(frame)
      cleanups.forEach((fn) => fn())
    }
  }, [open])

  async function onSubmit(): Promise<void> {
    if (loading) return

    const validation = validateHomeContactForm({
      email,
      websiteType,
    })

    if (validation) {
      setErrors(validation)
      if (validation.email) focusNuiInput(emailRef.current)
      return
    }

    setLoading(true)
    const result = await submitHomeContactForm({
      email: email.trim().toLowerCase(),
      website_type: websiteType as HomeContactWebsiteType,
    })
    setLoading(false)

    if (result.ok) {
      setOpen(false)
      setEmail('')
      setWebsiteType('')
      setErrors({})
    }
  }

  return (
    <section
      id="start"
      className="nuc-home-close nuc-home-panel"
      aria-labelledby="nuc-home-close-title"
    >
      <div className="nuc-home-close-panel">
        <div className="nuc-home-close-copy">
          <h2 id="nuc-home-close-title" className="nuc-home-title">
            {copy.closeTitle}
          </h2>
          <p className="nuc-home-support">{copy.closeSupport}</p>
        </div>
        <nui-button
          label={copy.closeCta}
          variant="primary"
          icon="mdi:email-outline"
          iconPos="right"
          onClick={() => setOpen(true)}
        />
      </div>
      <footer className="nuc-home-close-footer">
        <span>© {year} Nucleify</span>
        <span>Modular. Typed. Ready.</span>
      </footer>

      {dialogReady ? (
        <nui-dialog
          ref={dialogRef}
          className="nuc-home-close-dialog-host"
          width="26rem"
          dismissableMask
          closeOnEscape
          dialogClass="nuc-home-close-dialog"
        >
          <div slot="header" className="nuc-home-close-dialog-title">
            {copy.closeModalTitle}
          </div>

          <form
            className="nuc-home-close-form"
            noValidate
            onSubmit={(event) => {
              event.preventDefault()
              void onSubmit()
            }}
          >
            <p className="nuc-home-close-form-support">
              {copy.closeModalSupport}
            </p>

            <label className="nuc-home-close-field">
              <span className="nuc-home-close-label">
                {copy.closeEmailLabel}
              </span>
              <nui-input-text
                ref={emailRef}
                value={email}
                type="email"
                name="email"
                fluid
                autocomplete="email"
                placeholder={copy.closeEmailPlaceholder}
                invalid={Boolean(errors.email)}
              />
              {errors.email ? (
                <span className="nuc-home-close-error" role="alert">
                  {errors.email}
                </span>
              ) : null}
            </label>

            <label className="nuc-home-close-field">
              <span className="nuc-home-close-label">
                {copy.closeTypeLabel}
              </span>
              <nui-select
                ref={selectRef}
                value={websiteType}
                fluid
                placeholder={copy.closeTypePlaceholder}
                invalid={Boolean(errors.website_type)}
              />
              {errors.website_type ? (
                <span className="nuc-home-close-error" role="alert">
                  {errors.website_type}
                </span>
              ) : null}
            </label>
          </form>

          <div slot="footer" className="nuc-home-close-actions">
            <nui-button
              type="button"
              variant="primary"
              fluid
              label={copy.closeSubmit}
              loading={loading}
              disabled={loading}
              icon="mdi:send-outline"
              iconPos="right"
              onClick={() => void onSubmit()}
            />
          </div>
        </nui-dialog>
      ) : null}
    </section>
  )
}
