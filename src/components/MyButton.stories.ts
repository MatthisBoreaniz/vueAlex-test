import type { Meta, StoryObj } from '@storybook/vue3-vite'

import MyButton from './MyButton.vue'

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories
const meta = {
  title: 'Components/Button',
  component: MyButton,
  render: (args: any) => ({
    components: { MyButton },
    setup() {
      return { args }
    },
    template: `
    <MyButton v-bind="args">
      <template v-if="args.icon">
        ←
      </template>
      <template v-else>Click me</template>
    </MyButton>
  `,
  }),
  tags: ['autodocs'],
  argTypes: {
    size: { control: 'select', options: ['giant', 'large', 'medium', 'small', 'tiny'] },
    variant: { control: 'radio', options: ['default', 'outline', 'ghost'] },
    href: { control: 'text' },
    icon: { control: 'boolean' },
    disabled: { control: 'boolean' },
  },
} satisfies Meta<typeof MyButton>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {}

export const Outline: Story = {
  args: {
    variant: 'outline',
  },
}

export const Ghost: Story = {
  args: {
    variant: 'ghost',
  },
}

export const Small: Story = {
  args: {
    size: 'small',
  },
}

export const SmallOutline: Story = {
  args: {
    size: 'small',
    variant: 'outline',
  },
}

export const GiantGhost: Story = {
  args: {
    size: 'giant',
    variant: 'ghost',
  },
}

export const WithIcon: Story = {
  args: {
    icon: true,
  },
}

export const Disabled: Story = {
  args: {
    disabled: true,
  },
}

export const large : Story = {
  args: {
    size: 'large',
  },
}
export const tiny : Story = {
  args: {
    size: 'tiny',
  },
}
