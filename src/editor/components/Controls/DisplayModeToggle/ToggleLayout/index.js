// @flow
import React from 'react'
import ViewQuilt from 'material-ui/svg-icons/action/view-quilt'
import Button from '../Button'

import { connect } from 'react-redux'

import {   layoutMode } from 'src/editor/actions/display'
import { isLayoutMode } from 'src/editor/selector/display'
import { createStructuredSelector } from 'reselect'

const Inner = ({ isLayoutMode, layoutMode }: { isLayoutMode: bool, layoutMode: Function }) => (
  <Button
    icon={<ViewQuilt />}
    description="Move things"
    active={isLayoutMode}
    onClick={layoutMode}
  />
)

const mapStateToProps = createStructuredSelector({ isLayoutMode })
const mapDispatchToProps = { layoutMode }

export default connect(mapStateToProps, mapDispatchToProps)(Inner)
