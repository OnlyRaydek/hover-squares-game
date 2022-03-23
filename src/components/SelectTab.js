const SelectTab = ({
  fetchedItems,
  selectChange
}) => {
  return (
    <select className='selectTab' defaultValue={'default'} onChange={selectChange}>
      <option value="default" disabled hidden>Choose here</option>
      {fetchedItems.map(item =>
        <option
          key={`${item.name}+${item.field}`}
          value={item.name}
        >
          {item.name}
        </option>
      )}
    </select>
  )
};

export default SelectTab;