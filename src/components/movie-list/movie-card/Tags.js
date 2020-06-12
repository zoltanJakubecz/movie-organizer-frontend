import React from 'react';
import { Tag, Input } from 'antd';
import { TweenOneGroup } from 'rc-tween-one';
import { PlusOutlined } from '@ant-design/icons';

class Tags extends React.Component {
  state = {
    tags: this.props.categories,
    inputVisible: false,
    inputValue: '',
  };

  getCategory = category => this.props.categories.find(c => c === category);

  handleClose = removedTag => {
    const filteredTags = this.state.tags.filter(tag => tag !== removedTag);
    const removedCategory = this.getCategory(removedTag);
    this.props.actions.detachFromMovie(this.props.movieId, removedCategory);
    this.setState({ tags: filteredTags });
    this.props.setCategories(this.props.categories.filter(c => c !== removedCategory));
  };

  showInput = () => {
    this.setState({ inputVisible: true }, () => this.input.focus());
  };

  handleInputChange = e => {
    this.setState({ inputValue: e.target.value });
  };

  handleInputConfirm = async () => {
    const { tags, inputValue } = this.state;
    if (inputValue === "" || tags.includes(inputValue)) {
      this.setState({ tags, inputVisible: false, inputValue: "" })
      return;
    }
    const res = await this.props.actions.attachToMovie(this.props.movieId, inputValue);
    const attachedCategory = res.data;
    const extendedTags = [...tags, attachedCategory];
    this.setState({
      tags: extendedTags,
      inputVisible: false,
      inputValue: '',
    });
    this.props.setCategories([...this.props.categories, attachedCategory]);
  };

  saveInputRef = input => (this.input = input);

  forMap = tag => {
    const tagElem = (
      <Tag
        closable
        onClose={e => {
          e.preventDefault();
          this.handleClose(tag);
        }}
      >
        {tag}
      </Tag>
    );
    return (
      <span key={tag} style={{ display: 'inline-block' }}>
        {tagElem}
      </span>
    );
  };

  render() {
    const { tags, inputVisible, inputValue } = this.state;
    const tagChild = tags.map(this.forMap);
    return (
      <div>
        <div style={{ marginBottom: 16 }}>
          <TweenOneGroup
            enter={{
              scale: 0.8,
              opacity: 0,
              type: 'from',
              duration: 100,
              onComplete: e => {
                e.target.style = '';
              },
            }}
            leave={{ opacity: 0, width: 0, scale: 0, duration: 200 }}
            appear={false}
          >
            {tagChild}
          </TweenOneGroup>
        </div>
        {inputVisible && (
          <Input
            ref={this.saveInputRef}
            type="text"
            size="small"
            style={{ width: 78 }}
            value={inputValue}
            onChange={this.handleInputChange}
            onBlur={this.handleInputConfirm}
            onPressEnter={this.handleInputConfirm}
          />
        )}
        {!inputVisible && (
          <Tag onClick={this.showInput} className="site-tag-plus">
            <PlusOutlined /> New Category
          </Tag>
        )}
      </div>
    );
  }
}

export default Tags

// ReactDOM.render(<EditableTagGroup />, mountNode);
