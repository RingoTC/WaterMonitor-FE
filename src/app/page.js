import 'bootstrap/dist/css/bootstrap.min.css';
import Alert from 'react-bootstrap/Alert';

export default function Home() {
  return (
    <div>
        <h1>Home</h1>
        {[
        'primary',
        'secondary',
        'success',
        'danger',
        'warning',
        'info',
        'light',
        'dark',
        ].map((variant) => (
        <Alert key={variant} variant={variant}>
            This is a {variant} alert—check it out!
        </Alert>
        ))}
    </div>
  )
}
