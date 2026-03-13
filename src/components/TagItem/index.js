import './index.css'

const TagItem = props => {
  const {tagDetails, onToggleTag, isActive} = props
  const {optionId, displayText} = tagDetails
  const activeFilterClassName = isActive ? 'active-filter' : ''
  const onClickBtn = () => {
    onToggleTag(optionId)
  }

  return (
    <li className="individual-tag-item">
      <button
        className={`normal-filter ${activeFilterClassName}`}
        onClick={onClickBtn}
        type="button"
      >
        {displayText}
      </button>
    </li>
  )
}

export default TagItem
