import './progressbar.css'

interface ProgressBarProps {
  bound: number
  isInView: boolean
}

const ProgressBar: React.FC<ProgressBarProps> = ({ bound, isInView }) => {
  return (
    <div className="ml-4 rounded-full border w-72 h-4 overflow-hidden">
      <div
        className={`progress-fill ${
          isInView ? 'animate' : ''
        } rounded-full h-full bg-green-500`}
        style={{
          '--bound': `${bound}%`,
          '--duration': `${bound / 30}s`,
        } as React.CSSProperties}
      ></div>
    </div>
  )
}

export default ProgressBar
