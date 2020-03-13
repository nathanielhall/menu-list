# Menu List

> Menu list component created using Material-UI

## System Requirements

- [Git](https://git-scm.com/) v2 or greater
- [NodeJS](https://nodejs.org/en/) v11 or greater
- [npm](https://www.npmjs.com/) v6 or greater

## Setup

```shell
git clone https://github.com/nathanielhall/menu-list.git
cd menu-list
npm install
```

This will launch the application in your browser at `http://localhost:8080`. If
the browser doesn't open, try typing in the address.

You should see the menu list component in your browser:

<img src="screenshot.png" alt="App Screenshot" title="App Screenshot" width="100" />

## Usage

Example creating a list of menu items

```jsx
<MenuList heading="John Doe">
  <MenuListItem onClick={() => console.log('Profile clicked')}>
    Profile
  </MenuListItem>
  <MenuListItem onClick={() => console.log('Account clicked')}>
    Account
  </MenuListItem>
  <hr />
  <MenuListItem>
    <PersonIcon />
    My Profile
  </MenuListItem>
</MenuList>
```
