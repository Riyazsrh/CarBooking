import "./InputField.scss";

interface InputFieldProps {
  autoComplete?: string;
  autoFocus?: boolean;
  disabled?: boolean;
  error?: string;
  fullWidth?: boolean;
  id?: string;
  list?: string;
  max?: string;
  maxLength?: string;
  min?: string;
  name?: string;
  onBlur?: () => void;
  onChange?: (e?: any) => void;
  onClick?: () => void;
  pattern?: string;
  placeholder?: string;
  readOnly?: boolean;
  required?: boolean;
  rows?: number;
  step?: string;
  text?: string;
  type?: string;
  value?: string;
}

const InputField: React.FC<InputFieldProps> = ({
  autoComplete,
  autoFocus,
  disabled,
  error,
  fullWidth,
  id,
  list,
  max,
  maxLength,
  min,
  name,
  onBlur,
  onChange,
  onClick,
  pattern,
  placeholder,
  readOnly,
  required,
  rows,
  step,
  text,
  type = "text",
  value,
  ...rest
}) => {
  return (
    <div
      className={`input-field-container ${fullWidth ? "full-width" : "compressed"
        }`}
    >
      {rows ? (
        <textarea
          autoFocus={autoFocus}
          className="input-field"
          disabled={disabled}
          id={id}
          name={name}
          onBlur={onBlur}
          onChange={onChange}
          placeholder={placeholder}
          readOnly={readOnly}
          required={required}
          rows={rows}
          value={value}
          {...rest}
        >
          {text}
        </textarea>
      ) : (
        <input
          autoComplete={autoComplete}
          autoFocus={autoFocus}
          className="input-field"
          disabled={disabled}
          id={id}
          list={list}
          max={max}
          min={min}
          name={name}
          onBlur={onBlur}
          onChange={onChange}
          pattern={pattern}
          placeholder={placeholder}
          readOnly={readOnly}
          required={required}
          step={step}
          type={type}
          value={value}
          {...rest}
        />
      )}
      {error && (
        <div className="error-message">
          <div className="message">{error}</div>
          <div className="close-icon" onClick={onClick}></div>
        </div>
      )}
    </div>
  );
};
export default InputField;
