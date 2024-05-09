import {
  Box,
  SimpleGrid,
  Image,
  Text,
  Heading,
  Center,
  useBreakpointValue,
  Slide,
  Collapse,
} from "@chakra-ui/react";
import { GatsbyImageProps } from "gatsby-plugin-image";
import GatsbyImage from "gatsby-image";
import React, { FunctionComponent, ReactNode, useState } from "react";

interface ExpandableCardGridItemProps {
  image?: string | GatsbyImageProps;
  title?: string;
  description?: ReactNode;
  onClick: () => void;
  active: boolean;
  imageContain?: boolean;
}

export const ExpandableCardGridItem: FunctionComponent<ExpandableCardGridItemProps> =
  ({ image, title, description, onClick, active, imageContain }) => {
    const activeStyles = {
      borderColor: "primary",
      boxShadow: "xl",
    };
    return (
      <Box
        borderWidth="1px"
        boxShadow="md"
        borderRadius="lg"
        overflow="hidden"
        cursor="pointer"
        onClick={onClick}
        {...(active ? activeStyles : {})}
        transition="0.3s"
      >
        {image &&
          (typeof image === "string" ? (
            <Image
              src={image}
              height="200px"
              objectFit={imageContain ? "contain" : "cover"}
              width="100%"
              fallback={<Box height="200px" background="gray.300" />}
            />
          ) : (
            <Box height="200px" width="100%">
              <GatsbyImage
                style={{ objectFit: "cover", height: "100%", width: "100%" }}
                fluid={image as any}
              />
            </Box>
          ))}
        <Box p={6} textAlign="center">
          <Heading as="h6" size="sm">
            {title}
          </Heading>
          <Text>{description}</Text>
        </Box>
      </Box>
    );
  };

interface Item<DataType> {
  title?: string;
  image?: string;
  description?: ReactNode;
  data: DataType; // item data
}

interface ExpandableCardGridProps<DataType> {
  items: Item<DataType>[];
  columnOverrides?: any;
  renderMore: (data: any) => ReactNode;
  imageContain?: boolean;
}

export const ExpandableCardGrid: FunctionComponent<
  ExpandableCardGridProps<unknown>
> = ({ items, columnOverrides, renderMore, imageContain }) => {
  const columns = useBreakpointValue(
    columnOverrides ?? { base: 1, sm: 2, md: 4 }
  );
  const [clickedItemIndex, setClickedItemIndex] = useState<number>(-1);
  const clickedItem = items[clickedItemIndex];

  if (!columns) return null;

  return (
    <>
      {Array(Math.ceil((items.length + 1) / columns))
        .fill(0)
        .map((_, i) => {
          return (
            <React.Fragment key={i}>
              <SimpleGrid columns={columns} spacing={10} mt={10}>
                {items
                  .slice(i * columns, i * columns + columns)
                  .map((item, j) => (
                    <ExpandableCardGridItem
                      imageContain={imageContain}
                      key={i * columns + j}
                      title={item.title}
                      image={item.image}
                      description={item.description}
                      onClick={() => {
                        setClickedItemIndex(i * columns + j);
                      }}
                      active={clickedItemIndex === i * columns + j}
                    />
                  ))}
              </SimpleGrid>
              <Collapse
                in={Math.floor(clickedItemIndex / columns) === i} // show if the clicked item is in the same row
                animateOpacity
                unmountOnExit
              >
                <Box
                  borderRadius="lg"
                  padding={8}
                  width="100%"
                  background="primary"
                  marginTop={8}
                  shadow="md"
                >
                  {clickedItem && renderMore(clickedItem.data)}
                </Box>
              </Collapse>
            </React.Fragment>
          );
        })}
    </>
  );
};
