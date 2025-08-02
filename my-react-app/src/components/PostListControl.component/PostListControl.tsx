import './PostListControl.css'

interface Option {
  value: string;
  name: string;
}

interface PostListControlProps {
  value: string;
  onChange: (value: 'title' | 'text') => void;
  defaultValue: string;
  options: Option[];
  searchQuery: string;
  onSearchChange: (query: string) => void;
}

const PostListControl = (props: PostListControlProps) => {
  return (
    <div className='post-list-control__wrapper'>
        <h1 className='post-list-control__title'>Управление постами</h1>
        <input 
          className='post-list-control__input' 
          placeholder='Поиск'
          value={props.searchQuery}
          onChange={event => props.onSearchChange(event.target.value)}
        >
      </input>
        <select className='post-list-control__select' value={props.value} onChange={event => props.onChange(event.target.value as 'title' | 'text')}>
            <option disabled value = "">{props.defaultValue}</option>
            {props.options.map(option =>
               <option key = {option.value} value={option.value}>
                  {option.name}
               </option>
            )}
        </select>
    </div>
  )
}

export default PostListControl