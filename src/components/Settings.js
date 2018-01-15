/*

connect button => request token url

*/
import React, {Component} from 'react';
import {
  Layout,
  Page,
  Link,
  AccountConnection
  } from '@shopify/polaris';

class Settings extends Component {
  constructor(props) {
    super(props);
    this.state = {
      connected: false,
    };
  }

  render() {
    return (
      <Page
        title="Settings"
      >
        <Layout>
          {this.renderAccount()}
        </Layout>
      </Page>
    );
  }

  valueUpdater(field) {
    return (value) => this.setState({[field]: value});
  }
  toggleConnection() {
    this.setState(({connected}) => ({connected: !connected}));
  }

  connectAccountMarkup() {
    return (
      <Layout.AnnotatedSection
        title="Account"
        description="Connect your account to your Shopify store."
      >
        <AccountConnection
          action={{
            content: 'Connect',
            onAction: this.toggleConnection.bind(this, this.state),
          }}
          details="No account connected"
          termsOfService={<p>By clicking Connect, you are accepting Sample’s <Link url="https://polaris.shopify.com">Terms and Conditions</Link>, including a commission rate of 15% on sales.</p>}
        />
      </Layout.AnnotatedSection>
    );
  }

  disconnectAccountMarkup() {
    return (
      <Layout.AnnotatedSection
          title="Account"
          description="Disconnect your account from your Shopify store."
        >
        <AccountConnection
          connected
          action={{
            content: 'Disconnect',
            onAction: this.toggleConnection.bind(this, this.state),
          }}
          accountName="Tom Ford"
          title={<Link url="http://google.com">Tom Ford</Link>}
          details="Account id: d587647ae4"
        />
      </Layout.AnnotatedSection>
    );
  }

  renderAccount() {
    return this.state.connected
      ? this.disconnectAccountMarkup()
      : this.connectAccountMarkup();
  }
}

export default Settings;
