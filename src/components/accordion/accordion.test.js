import React from 'react';
import {render, screen, fireEvent} from '@testing-library/react'
import '@testing-library/jest-dom'
import Accordion from "./accordion";

describe("Accordion", () => {

  it("expands and collapses", async () => {

    const singleChild = { title: "Test Single Child", children: <p>Hello, I am a child!</p> };

    render(<Accordion title={singleChild.title}>{singleChild.children}</Accordion>);
    
    let accordionTitle = await screen.findByText(singleChild.title);

    console.log(accordionTitle);

    expect(accordionTitle).toBeInTheDocument();
    
    await fireEvent.click(accordionTitle);

    let accordionContent = await screen.findByText("Hello, I am a child!");
    console.log(accordionContent.parentElement);

    expect(accordionContent.parentElement.parentElement).not.toHaveClass('collapsed'); 

    await fireEvent.click(accordionTitle);

    expect(accordionContent.parentElement.parentElement).toHaveClass('collapsed');

  });
});