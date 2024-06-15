import { Unstable_NumberInput as BaseNumberInput } from '@mui/base/Unstable_NumberInput';
import RemoveIcon from '@mui/icons-material/Remove';
import AddIcon from '@mui/icons-material/Add';
import { styled } from '@mui/material/styles';

function NumberInput() {
    return (
        <BaseNumberInput
            value={1}
            slots={{
                root: StyledInputRoot,
                input: StyledInput,
                incrementButton: StyledButton,
                decrementButton: StyledButton,
            }}
            slotProps={{
                incrementButton: {
                    children: <AddIcon fontSize="small" />,
                    className: 'increment',
                },
                decrementButton: {
                    children: <RemoveIcon fontSize="small" />,
                },
            }}
        />
    );
};

const StyledInputRoot = styled('div')(
    ({ theme }) => `
    margin: 1.25rem 0;
    width: fit-content;
    display: flex;
    align-items: center;
`,
);

const StyledInput = styled('input')(
    ({ theme }) => `
    font-family: 'Roboto-Medium';
    background: transparent;
    border: 1px solid #ffffffbf;
    border-radius: 5px;
    margin: 0 8px;
    padding: 10px 12px;
    outline: 0;
    min-width: 0;
    width: 9rem;
    text-align: center;
    color: #fff;

  &:hover {
    border-color: #bb9d7b;
  }

  &:focus {
    border-color: #bb9d7b;
  }

  &:focus-visible {
    outline: 0;
  }
`,
);

const StyledButton = styled('button')(
    ({ theme }) => `
    line-height: 1.5;
    border: 1px solid;
    border-radius: 100%;
    background: #fff;
    color: "#ffffffbf";
    width: 32px;
    height: 32px;
    display: flex;
    flex-flow: row nowrap;
    justify-content: center;
    align-items: center;

    &:hover {
      cursor: pointer;
      background: #bb9d7b;
      border: none;
      color: #fff;
    }

    &:focus-visible {
      outline: 0;
    }

    &.increment {
      order: 1;
    }
`,
);

export default NumberInput