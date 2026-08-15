"use client"

import { Portal, Select, createListCollection } from "@chakra-ui/react"


export const SelectCustom = ({items, title, placeholder}:{items:Array<{label:string, value:string}>, title:string,
placeholder:string}) => {
  return (
    <Select.Root collection={createListCollection({items})} size="sm" width="320px">
      <Select.HiddenSelect />
      <Select.Label>{title}</Select.Label>
      <Select.Control>
        <Select.Trigger>
          <Select.ValueText placeholder={placeholder} />
        </Select.Trigger>
        <Select.IndicatorGroup>
          <Select.Indicator />
        </Select.IndicatorGroup>
      </Select.Control>
      <Portal>
        <Select.Positioner>
          <Select.Content>
            {items?.map((framework) => (
              <Select.Item item={framework} key={framework.value}>
                {framework.label}
                <Select.ItemIndicator />
              </Select.Item>
            ))}
          </Select.Content>
        </Select.Positioner>
      </Portal>
    </Select.Root>
  )
}
