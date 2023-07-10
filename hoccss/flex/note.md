# Flex = Flexible Box Module

## Các thuộc tính trong nhóm Flex Container

- display: flex | inline-flex => Kích hoạt flex
- flex-direction: Chọn hướng cho trục chính (main axis)

* row => Mặc định
* row-reverse
* column
* column-reverse

- justify-content: Căn chỉnh các item theo hướng song song với trục chính

* flex-start
* flex-end
* center
* space-around
* space-evenly
* space-between

- align-items: Căn chỉnh các item theo hướng vuông góc với trục chính (cross axis)

* stretch: Mặc định, full chiều cao theo container
* flex-start
* center
* flex-end
* baseline

- flex-wrap:

* nowrap
* wrap
* wrap-reverse

- align-content: Căn chỉnh hàng (cột) theo hướng vuông góc với trục chính

* stretch
* flex-start
* flex-end
* center
* space-around
* space-evenly
* space-between

- gap

## Các thuộc tính trong nhóm Flex Item

- flex-grow: Dãn đều các item
  => Số nguyên: 0 - Không giãn, 1: Giãn đều

- flex-shrink

- flex-basis

* Bị chặn bởi min-width và max-width nếu flex-direction là row
* Bị chặn bởi min-height và max-height nếu flex-direction là column

- flex: flex-grow flex-shrink flex-basis

- align-self

- order
