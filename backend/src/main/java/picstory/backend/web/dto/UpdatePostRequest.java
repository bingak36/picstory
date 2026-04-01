package picstory.backend.web.dto;

import picstory.backend.domain.PostCategory;

public record UpdateRequest(
        PostCategory category,
        String title,
        String content
) {
}
