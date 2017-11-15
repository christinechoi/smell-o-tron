import React from 'react';
import { Card, Button, Image } from 'semantic-ui-react';

const SelectedPerfumes = (props) => {

  {debugger};
  return (
    <div className='selected Perfumes' > {
      
      <Card.Group>
        <Card>
          <Card.Content>
            <Image src={props.img[0]} />
            <Card.Header>
              {props.name[0]}
            </Card.Header>
            <Card.Description>
              brand={props.brand[0]}
            </Card.Description>
            <Card.Meta>
              meta stuff
            </Card.Meta>
            <Card.Content extra>
              <div className='ui buttons'>
                <Button 
                  onClick={props.removeOnClick} 
                  name={props.name[0]}
                  img={props.img[0]}
                  brand={props.brand[0]}
                  
                  basic color='red'> Remove 
                </Button>
              </div>
            </Card.Content>
          </Card.Content>
        </Card>
        
        {(props.name.length > 1 ) ? 
          <Card>
            <Card.Content>
              <Image src={props.img[1]} />
              <Card.Header>
                {props.name[1]}
              </Card.Header>
              <Card.Description>
               {props.brand[1]}
              </Card.Description>
              <Card.Meta>
                second card meta stuff
              </Card.Meta>
              <Card.Content extra>
                <div className='ui buttons' onClick={props.removeOnClick.bind(this)} >
                  <Button 
                    name={props.name[1]}
                    img={props.img[1]}
                    brand={props.brand[1]}
                    basic color='red'> Remove 
                  </Button>
                </div>
              </Card.Content>
            </Card.Content>
          </Card>
        : null }

        {(props.name.length > 2 ) ? 
          <Card>
            <Card.Content>
              <Image src={props.img[2]} />
              <Card.Header>
                {props.name[2]}
              </Card.Header>
              <Card.Description>
               {props.brand[2]}
              </Card.Description>
              <Card.Meta>
                no. 3 meta meta 
              </Card.Meta>
              <Card.Content extra>
                <div className='ui buttons'  onClick={props.removeOnClick} >
                  <Button 
                    name={props.name[2]}
                    img={props.img[2]}
                    brand={props.brand[2]}
                    basic color='red'> Remove 
                  </Button>
                </div>
              </Card.Content>
            </Card.Content>
          </Card>
        : null } 

      </Card.Group>

    }
    </div>
  );
};

export default SelectedPerfumes;
