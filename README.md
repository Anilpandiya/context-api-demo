## Context

```
provides a way to pass data through the component tree 
```
React JS

I'm Anil, the facilitator for this
session.

The goal of our session is to turn chaosinto clarity. As facilitators, our role is to
keep the session on track and to ensureeveryone participates in the discussion.


# Let's Begin!


```
Prop drilling
```
Problem Statement:

```
Main
```
```
comp1 comp
```
```
comp
{user} {user}
```
```
{user}
```
```
{user}
{user}
```

global state

theme

application configuration

authenticated user name

user settings

preferred language

a collection of services



Solution: Context^ API

```
Main
```
```
comp1 comp
```
```
comp
```
```
{user}
{user}
```
```
{user}
```
```
{user}
{user}
```
```
Context API
```

Context provides a way
to pass data through the
component tree without
having to pass props
down manually at every
level.

```
— reactjs.org
```


### API

```
React.createContext
Context.Provider
Context.Consumer
Context.displayName
```
```
create provide consume
```

CREATE 

Creates a Context object. When React renders a component that subscribes to this Context object
it will read the current context value from the closest matching Provider above it in the tree.


PROVIDER

The Provider component accepts a value prop to be passed to consuming components that are
descendants of this Provider. One Provider can be connected to many consumers. Providers can be
nested to override values deeper within the tree.


CONSUMER

A React component that subscribes to context changes. Using this component lets you subscribe to
a context within a function component.


#### Hands-On


#### Q&A

```
Thank you.
```

