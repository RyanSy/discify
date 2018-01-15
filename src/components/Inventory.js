import React, { Component} from 'react';
import { ResourceList } from '@shopify/polaris';

class Inventory extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <ResourceList
        items={[
          {
            url: '#',
            attributeOne: 'How to Get Value from Wireframes',
            attributeTwo: 'by Jonathan Mangrove',
          },
          {
            url: '#',
            attributeOne: 'Test blog post',
            attributeTwo: 'by Jonathan Mangrove',
            badges: [
              {content: 'Hidden'},
            ],
          },
        ]}
        renderItem={(item, index) => {
          return <ResourceList.Item key={index} {...item} />;
        }}
      />
    )
  }
}

export default ;
