import React, { Component } from 'react';
import ComponentList from './ComponentList';
import PageData from './PageData';
import Cookies from 'universal-cookie';
import styles from './styles.scss';

class PageLayout extends Component {

    constructor(props) {      
      super(props);    
      this.cookies = new Cookies();
      this.user = null;
      this.wrapperGroup = 0;
    } 
  
    render() {      
      let url = this.props.location.pathname;  

      if(typeof window === 'undefined') {
        // server side 

      } else {
        // client side       
        window.__API_DATA__.url = url;
      }
      const page = PageData[url];
      const template = page.template || "template-not-found";

      

      const allLayout = page.layout.map((layoutList) => {
        let componentCount = 0;
        const span = layoutList.span;        
        const layout = layoutList.components.map((component, id , components) => {          
          const componentName = component.name;    
          const props = component.props;    
          const ChildComponent = ComponentList[componentName];
          if(typeof ChildComponent === 'undefined') {
            return(
              <div key='{id}' className={styles.error}>Can't find {componentName} component!</div>
            );
          }
          return (
              <ChildComponent key={componentName} props={props} />
          );
        });
        const wrapperKeyStr = `wrapper_${this.wrapperGroup}_componentCount`;
        const spanWidth = span[componentCount];
        console.log(">>>>>>", spanWidth[1]);
        componentCount ++;
        this.wrapperGroup ++;              
        return (
          <div className={styles.wrapper} key={wrapperKeyStr}>
            {layout}
          </div>);
      });
      return(
        <div className={styles.app}>
          {allLayout}
        </div>
      );
    }
}
export default PageLayout;
